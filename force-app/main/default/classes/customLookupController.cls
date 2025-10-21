public with sharing class customLookupController {

    @AuraEnabled(cacheable = true)
    public static List<sObject> searchRecords(String objectApiName, String searchKey){
        List<sObject> sObjectList = new List<sObject>();
        if(String.isNotBlank(searchKey)){
            String key = '%'+searchKey+'%';
            String queryString = 'select Id, Name from '+objectApiName+ ' where Name like :key';
            sObjectList = Database.query(queryString, AccessLevel.USER_MODE);
        }
        return sObjectList;
    }
}