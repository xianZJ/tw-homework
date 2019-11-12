import Card from './card';

describe('Card', () => {
    it('renders correctly', ()=>{
        const card = new Card();
        card.renderDom();
        expect(card).toMatchSnapshot();
    })

    it('renders correctly', ()=>{
        const card = new Card();
        card.renderDom();
        expect(card).toMatchSnapshot();
    })
});

