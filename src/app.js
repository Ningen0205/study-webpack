import './sub';
import './app.scss';

const init = async () => {
    console.log('this is a main js file.');
    await asyncFc();
};

async function asyncFc(){
    console.log([1,2,3].includes(0));
}

init();