function verifyAge(){
	var inputAge = document.getElementById('age').value;

	if (inputAge < 18){
	    window.alert('Not Valid To Vote');
	}
	else {
		window.alert('Welcome New User');
	}
}



