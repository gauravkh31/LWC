public with sharing class oppController {
    

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities( String searchKey){
        String key = (searchKey == null || searchKey == '') ? '%' : '%' + searchKey + '%';
        List<Opportunity> oppList =[select Id, Name, Account.Name from Opportunity  where Name like :key   with USER_MODE limit 5];
        return oppList;
    }
}



// AND AccountId = null 