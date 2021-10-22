import { createStore } from 'redux';

// reducer 
function counter(state=0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

//actions
const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

class Counter {
    constructor(options) {
        this.$el = options.el;
        this.store = options.store;
        store.subscribe(this.update.bind(this));
        this.$el.querySelector('#inc')
            .addEventListener('click', this.inc.bind(this));
        this.$el.querySelector('#dec')
            .addEventListener('click', this.dec.bind(this));
    }

    inc() {
        this.store.dispatch(increment())
    }

    dec() {
        this.store.dispatch(decrement())
    }


    update() {
        console.log(store.getState());
        this.$el
            .querySelector('#text')
            .innerHTML = store.getState();
    }

    render() {
        this.update();
    }
}

// Main
const d = document;
//create store
const store = createStore(counter);

(function(){
    const counter = new Counter({
        el: d.getElementById('counter'),
        store
    });
    counter.render();
})();
