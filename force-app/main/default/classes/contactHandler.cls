public class contactHandler {

    public static void handlingBeforeInsertActivities(List<Contact> contactRecordsList){
        
        Set<Id> setForAccountIds = new Set<Id>();
        for(Contact con : contactRecordsList){
            if(con.AccountId != null){
                setForAccountIds.add(con.AccountId);
            }
        }

        List<Contact> allContacts = [
            SELECT LastName, Email, Id, AccountId, Account.maximum_contacts__c 
            FROM Contact 
            WHERE AccountId IN :setForAccountIds
        ];

        // Map<AccountId, List<Integer>> --> [0] = contact count, [1] = max allowed
        Map<Id, List<Integer>> accountIdVsContact = new Map<Id, List<Integer>>();

        for(Contact con : allContacts){
            if(!accountIdVsContact.containsKey(con.AccountId)){
                if(con.Account.maximum_contacts__c != null){
                    
                
                accountIdVsContact.put(con.AccountId, new List<Integer>{1, con.Account.maximum_contacts__c.intValue()});
                }
            } else {
                List<Integer> values = accountIdVsContact.get(con.AccountId);
                values[0] = values[0] + 1; // increment count
                accountIdVsContact.put(con.AccountId, values);
            }
        }

        for(Contact contactRecordToInsert : contactRecordsList){
            if(accountIdVsContact.containsKey(contactRecordToInsert.AccountId)){
                List<Integer> values = accountIdVsContact.get(contactRecordToInsert.AccountId);
                Integer currentCount = values[0];
                Integer maxAllowed = values[1];

                if(currentCount >= maxAllowed){
                    contactRecordToInsert.addError('You cannot insert this contact because it exceeds the limit');
                } 
            }
        }
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    @future
    public static void deleteAsync(Set<Id> s){
        List<Contact> contactsToDelete = [select Id, LastName from Contact where Id IN :s];
        if(!contactsToDelete.isEmpty()){
           delete contactsToDelete; 
        }
        
    }
    
    public static void handleAfterUndeleteActivities(List<Contact> contactRecordsList){
       Set<Id> recordsToDelete = new Set<Id>();
        Set<Id> setForAccountIds = new Set<Id>();
        List<Id> contactIdss = new List<Id>();
        for(Contact con : contactRecordsList){
            contactIdss.add(con.Id);
            if(con.AccountId != null){
                setForAccountIds.add(con.AccountId);
            }
        }
        
        

        List<Contact> allContacts = [
            SELECT LastName, Email, Id, AccountId, Account.maximum_contacts__c 
            FROM Contact 
            WHERE AccountId IN :setForAccountIds AND Id NOT IN :contactIdss
        ];

        // Map<AccountId, List<Integer>> --> [0] = contact count, [1] = max allowed
        Map<Id, List<Integer>> accountIdVsContact = new Map<Id, List<Integer>>();

        for(Contact con : allContacts){
            if(!accountIdVsContact.containsKey(con.AccountId)){
                accountIdVsContact.put(con.AccountId, new List<Integer>{1, con.Account.maximum_contacts__c.intValue()});
            } else {
                List<Integer> values = accountIdVsContact.get(con.AccountId);
                values[0] = values[0] + 1; // increment count
                accountIdVsContact.put(con.AccountId, values);
            }
        }

        for(Contact contactRecordToInsert : contactRecordsList){
            if(accountIdVsContact.containsKey(contactRecordToInsert.AccountId)){
                List<Integer> values = accountIdVsContact.get(contactRecordToInsert.AccountId);
                Integer currentCount = values[0];
                Integer maxAllowed = values[1];

                if(currentCount >= maxAllowed){
                    recordsToDelete.add(contactRecordToInsert.Id);
                } 
            }
        }
        deleteAsync(recordsToDelete);
    }

}