public class Animal {
    
    
    
    /*
    public boolean isPalindrome(String str){
        Integer l = str.length();
        
        Integer i = 0;
        Integer j = l-1;
        
        while(i<=j){
            if(str.charAt(i)!=str.charAt(j)){
                return false;
            }
            i++;
            j--;
            
        }
       return true; 
    } 
    
    
    
    
    
    
    public Integer sumOfDigits(Integer num){
        Integer sum = 0;
        
        while(num>0){
        sum += Math.mod(num,10);
        num /= 10;
        }
        return sum;
        
        
        
    }

    
    
    public static void swap(List<Integer> inputList, Integer i, Integer j){
        Integer temp = inputList.get(i);
         inputList[i] =  inputList[j];
         inputList[j] = temp;
    }
    
    
    
    
    public static List<Integer> reverseList(List<Integer> inputList)
    {
         
       	Integer i = 0;
        Integer j = inputList.size()-1;
        while(i<=j){
            swap(inputList,i,j);
            i++;
            j--;
        }
        return inputList;
           
    }
   
    
    
    public static Map<Integer, List<Integer>> map2DList(List<List<Integer>> inputList){
        Map<Integer, List<Integer>>  m = new Map<Integer, List<Integer>>();
        for(Integer i =0; i < inputList.size(); i++){
            m.put(i, inputList[i] );

        }
        return m;
    }
    


    
    public static void switchUse(String input){
        switch on input{
            when 'A'{
                System.debug('The letter is A');
            }
            when 'B'{
                System.debug('The letter is B');
            }
            when 'C'{
                System.debug('The letter is C');
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    public static void myMethod(){
        String i = 'kjsrhfkiu89087890i';
        ID ii = i;
        System.debug(ii);
    }
    
 
    
    
    
    
    
    public static void listSimulation(){
        List<Integer> lists = new List<Integer>{10,20,30};
            System.debug(lists.size());
        Integer i =0; 
        Integer sum  = 0;
        while(i<lists.size()){
            sum+= lists[i];
            i++;
        }
        
        System.debug(sum);
    }
    
    
    




    public static void myMethod(){
        Vehicle__c s = new Vehicle__c();
        
        s.Owner_Email__c = 'gggg@gmail.com';
        System.debug('method executed');
    }   


   
    
     public void myMethod(){
         List<String> cars = new List<String>{'BMW', 'Scorpio', 'Defender', 'Harrier'};
             List<Integer> prices = new List<Integer>{10,20,30,40};
                 
                 
                 for(Integer i = 0; i < cars.size(); i++ ){
                     System.debug(cars[i] + ' => '+ prices[i]);
                 }
    }
    

    
    
    public static void myMethod(){
         
        Date dt = Date.newInstance(2025, 12, 02);
        System.debug(dt);
        System.debug(dt.year());
        System.debug(dt.month());
        System.debug(dt.day());
        System.debug(dt+4);
        
        
        Date currentDate = Date.today();
        System.debug(currentDate);
        System.debug(currentDate+3);
        System.debug(currentDate.addMonths(3));
        
        
        
        
        
    }
    
    
    		 	
    
    List<Account> l = new List<Account>();
    for(Integer i =0; i < 10; i++){
        
    }
    		

    public static void mmmm(){
    Set<Integer> s = new Set<Integer>{10,20};
        s.aDD(30);
    System.debug(s);
    }
    

    
    // map class
    // 
    // 
    
   
    
    
     Write a program to find common elements for all the three lists. --25 + 5 Marks
For ex : (1,4,7,8)
(2,5,3,6,4,8,9)
(9,5,2,7,4)
Here the result is only 4
     
    
    
    public static void myMethod(){
        List<Integer> l1 = new List<Integer>{1,4,7,8};
            List<Integer> l2 = new List<Integer>{2,5,3,6,4,8,9};
                List<Integer> l3 = new List<Integer>{9,5,2,7,4};
                    
                    
                    
                    Set<Integer> m1 = new Set<Integer>(l1);
        
                    Set<Integer> m2 = new Set<Integer>(l2);
        
                    Set<Integer> m3 = new Set<Integer>(l3);
        
        m1.retainAll(m2);
        m1.retainAll(m3);
        
        
        System.debug(m1);
            
    
    
    }

 
    
    public static void myMethod(){
        List<Account> accList = [select Name, NumberOfEmployees from Account];
        
        
        
        for(Account i : accList){
            System.debug(i.name);
        }
    }

*/
    
    
    
    
    public static void myMethod(){
        List<Account> accList = [select Name from Account where isDeleted = true All Rows];
        System.debug(accList);
            
    }
    
}