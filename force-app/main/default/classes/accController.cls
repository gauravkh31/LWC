public with sharing class accController {
    
    @AuraEnabled
    public static List<Account> getAccounts(String searchKey) {
    String key = (searchKey == null || searchKey == '') ? '%' : '%' + searchKey + '%';
    List<Account> accList = [
    SELECT Id, Name, Industry,
        (SELECT Id, Name FROM Opportunities)
    FROM Account
    WHERE Name LIKE :key
    WITH USER_MODE
    LIMIT 5
];
    return accList;
}




@AuraEnabled(cacheable = true)
public static List<Account> getAccWithOpps(){
    List<Account> accList = [select Id, Name, AnnualRevenue, (select Id, Name, Amount from Opportunities order by Amount desc limit 5) from Account where AnnualRevenue != null order by AnnualRevenue desc limit 10];


    return accList;
}
}