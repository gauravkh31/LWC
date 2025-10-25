public with sharing class contactController {
    

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        List<Contact> conList = [select Id, name, FirstName, LastName, Title, Phone, Email, PhotoUrl from Contact where PhotoUrl != null with USER_MODE limit 10];
        return conList;
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactListForDataTable(){
        List<Contact> conList = [select Id, name, FirstName, LastName, Title, Phone, Email, picture__c, rank__c, accountId, account.Name, account.Description from Contact where accountId != null with USER_MODE limit 10];
        return conList;
    }
}