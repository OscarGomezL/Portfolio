export default function backgroundColor(sp, bodyTag) {
	if(sp <= 10) bodyTag.style.background = 'var(--n4)';
	else if(sp <= 85) bodyTag.style.background = 'var(--n2)';
	else if(sp <= 100) bodyTag.style.background = 'black';
}