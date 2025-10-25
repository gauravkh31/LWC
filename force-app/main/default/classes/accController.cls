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
}