let socket = new WebSocket(WS_URL);
const body = document.querySelector('body');
const messageDiv = document.getElementById('message');
const waitingDiv = document.getElementById('waiting');
const win = document.getElementById('win');
const loss = document.getElementById('loss');
const loadDiv = document.getElementById('loadDiv');

socket.addEventListener('message', handleServerMessage);

function handleServerMessage(event) {
	const data = JSON.parse(event.data);
	console.log('Mensagem recebida do servidor:', data);

	switch (data.status) {
		case STATUS.WIN:
			setClientState('win', data.code);
			break;
		case STATUS.LOSE:
			setClientState('lose');
			break;
	}
}

function setClientState(state, code = '') {
	messageDiv.classList.toggle('hide-message', true);
	logo.classList.toggle('stop-spin', false);
	logo.classList.toggle('spin-animation', true);
	waitingDiv.style.display = 'none';
	loadDiv.style.display = 'flex';
	setTimeout(() => {
		body.className = 'main';
		if (state === 'win') {
			win.style.display = 'block';
			messageDiv.innerText = code;
			body.style.backgroundColor = 'rgba(34 197 94)';
			vibratePhone(1000);
		} else if (state === 'lose') {
			body.style.backgroundColor = 'rgba(249 115 22)';
			loadDiv.style.display = 'none';
			loss.style.display = 'block';
			body.messageDiv.innerText = '';
		}
		loadDiv.style.display = 'none';
		messageDiv.classList.toggle('show-message', state === 'win');
		messageDiv.classList.toggle('hide-message', state !== 'win');
	}, 2100);
}

function vibratePhone(timeMs) {
	if (navigator.vibrate) {
		navigator.vibrate(timeMs);
	}
}
