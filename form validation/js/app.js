const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

// form.addEventListener('submit',(e) =>{
// 	e.preventDefault();
// 	checkInput();
// });


function checkInput()
{
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const password1Value = password1.value.trim();
	const password2Value =password2.value.trim();

	if(usernameValue=== '')
	{
		setErrorFor(username , 'Username cannot be blank');
		username.focus();
		return false;
	}else
	{
		setSuccessFor(username,'');
	}

	if(emailValue=== '')
	{
		setErrorFor(email , 'Email cannot be blank');
		email.focus();
		return false;

	}
	else if (!isEmail(emailValue))
	{
		setErrorFor(email, 'Email is not valid');
		email.focus();return false;
	}
	else
	{
		setSuccessFor(email,'');
	}
		
	if(password1Value=== '')
	{
		setErrorFor(password1 , 'password cannot be blank');
		password1.focus();
		return false;
	}
	else
	{
		setSuccessFor(password1,'');
	}

	if(password2Value=== '')
	{
		setErrorFor(password1 , 'password cannot be blank');
		password2.focus();return false;
	}
	else if(password1Value!== password2Value)
	{
		setErrorFor(password2 , 'password dont match');
		password2.focus();return false;
	}
	else
	{
		setSuccessFor(password2,'');

	}
return true;
}



function setErrorFor(input,message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText =message;
	formControl.className = 'form-control error';
}
function setSuccessFor(input,message)
{
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText =message;
	formControl.className = 'form-control success';
}

function isEmail(email)
{
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function check1()
{
	if(password1.value.length<5)
	{
		setErrorFor(password1 , 'password very weak');return false;
	}
	else if(password1.value.length>=5 &&password1.value.length<=8)
	{
		setErrorFor(password1 , 'password weak ');return false;
	}
	else
	{
		setSuccessFor(password1,'Strong');
		return true;
	}

}

function check2()
{
	if(password2.value.length<5)
	{
		setErrorFor(password2 , 'password very weak');return false;
	}
	else if(password2.value.length>=5 && password2.value.length<=8 )
	{
		setErrorFor(password2 , 'password weak ');return false;
	}
	else
	{
		setSuccessFor(password2,'Strong');
		return true;
	}

}