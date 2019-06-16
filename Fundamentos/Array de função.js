let func = [];

//O var não funcionaria nesse caso
for (let i = 0; i<10; i++){
    func.push(function(){
        console.log(i);
    });
}

func[0]();
func[8]();