public with sharing class contactController {
    

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        List<Contact> conList = [select Id, name, FirstName, LastName, Title, Phone, Email, PhotoUrl from Contact where PhotoUrl != null with USER_MODE limit 10];
        return conList;
    }
}