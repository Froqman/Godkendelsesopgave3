// opretter user som modelclass
class user {
    constructor(FirstName, LastName, age, gender, image, interest, match, birthday, email, password){
       this.FirstName=FirstName;
       this.LastName=LastName;
        this.age=age;
        this.gender=gender;
        this.image=image;
        this.interest=interest;
        this.match=match;
        this.birthday=birthday;
        this.email=email;
        this.password=password;
    }
}
//extender user til FreeUser
class FreeUser extends user{
    constructor(FirstName, LastName, age, gender, image, interest, match, birthday, email, password){
        super(FirstName, LastName, age, gender, image, interest, match, birthday, email, password)
    }
}
// extender model-class user til PaymentUser
class PaymentUser extends user{
    constructor(FirstName, LastName, age, gender, image, interest, match, birthday, email, password, creditcard){
    super(FirstName, LastName, age, gender, image, interest, match, birthday, email, password)
    this.creditcard=creditcard;
}
}

let array = [user, PaymentUser, FreeUser]
//exportere user videre så jeg kan tilgå den i andre filer/mapper

module.exports=array;
