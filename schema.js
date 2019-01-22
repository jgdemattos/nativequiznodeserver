exports.typeDefs = `

type Deck{
    _id: ID
    name: String! 
}

type Card{
    _id: ID
    deckId: String!
    question: String!
    answer: String! 
}

type Query{
    getAllDecks:[Deck]
    getAllCards:[Card]
    getDeck(_id:ID!):Deck
    getCardsOf(_id:ID!):[Card]
}

type Mutation {
    addDeck(name: String! ):Deck
    addCard(deckId: String!, question:String!,answer:String! ):Card
}
`;
