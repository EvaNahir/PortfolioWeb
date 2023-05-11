	//edicion del aspecto del programa
		const btn = document.getElementById("colores");
		const btndos = document.getElementById("letras");
		const cambio = document.getElementsByClassName("container-sm");
		const container = document.getElementsByClassName("container");
		//const container = document.querySelectorAll(".container");

		function random(number) {
			return Math.floor(Math.random() * (number + 1));
		}

		btn.addEventListener("click", () => {
		const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
			//document.body.style.backgroundColor = rndCol;
			for(let i=0; i< cambio.length; i++) {
				cambio[i].style.backgroundColor = rndCol;
			}			
		});
		
		btndos.addEventListener("click", () => {
		const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
			//document.body.style.backgroundColor = rndCol;
			for(let i=0; i< container.length; i++) {
				container[i].style.color = rndCol;
			}
			
		});

		//codigo de los botones de edicion
		function cambiar_parrafo(){
			document.getElementById("edit-info").style.display="block";
			let texto=document.getElementById("info").innerText;
			console.log(texto);
		};
	
		function myFunction(valor){
			document.getElementById("info").innerText=valor;
		};
	
		function logMessage(message){
			console.log(message + "<br>");
		};
	
		let textarea=document.getElementById("info");
		textarea.addEventListener('keyup', (e) => {
			logMessage('Key "${e.key}" released [event: keyup]');
			if (e.key=="Enter"){
				document.getElementById("info").style.display="none"
			}
		})
	
		function showFile(input) {
			let file = input.files[0];
			alert('File name: ${file.name}');
			alert('Last modified: ${file.lastModified}');
		}

		let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(){
            console.log(reader.result);
            document.getElementById("info").innerText=reader.result;
        };
        reader.onerror = function(){
            console.log(reader.error);
        };