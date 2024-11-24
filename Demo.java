 
class Person {
    private int id;
    private String name;
    private String city;

    void man(int id,String name,String city) {
        this.id=id;
        this.name=name;
        this.city=city;

    }
    void show() {
        System.out.println(id);
        System.out.println(name);

        System.out.println(city);
 
    }
}

    class child extends Person {

        public void women() {
            System.out.println("This child class ");
        }
    }
 




public class Demo {
    public static void main(String[]args){
         child c=new child();
         c.women();
         c.man(25899, "Amit", "Patna");
         c.show();
        System.out.println("RADHA");
    }

     
}