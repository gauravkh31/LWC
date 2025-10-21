public with sharing class AccountHelper {


    @AuraEnabled(cacheable =  true)
    public static List<Account>  getAccountData() {
        return [select id, Name, Industry, Rating from Account WITH USER_MODE];
    }


    @AuraEnabled(cacheable =  true)
    public static List<Account>  getParentAccounts() {
        return [select id, Name, Industry, Rating from Account where AnnualRevenue != null WITH USER_MODE];
    }
}