public with sharing class LookupRecordController {
    
    @AuraEnabled
    public static Account getAccount(String accid){
        try {
            String v1 = accid;
            return [SELECT id,name,AccountNumber,Industry,Type,AnnualRevenue FROM Account WHERE Id =: v1 LIMIT 10];  
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String accname){
        //try {
            string key='%'+accname+'%';
            List<Account> accList = [SELECT id,name,AccountNumber,Industry,Type,AnnualRevenue FROM Account WHERE name Like: key LIMIT 10];
            System.debug('ACC LIST : '+accList);
            if(accList.size()>0){
                return accList;
            }else{
                return null;
            }
            
       /* } catch (Exception e) {
           // throw new AuraHandledException(e.getMessage());
           System.debug('EXCEPTION  '+e);
           return null;
        }*/
    }

    @AuraEnabled(cacheable= true)
    public static List<Contact> getContacts(String accid){
        try {
            return [SELECT id,name,accountId,title,email,phone
                    FROM Contact
                    WHERE accountId =:accid ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}