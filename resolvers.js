exports.resolvers = {
  Query: {
    getAllDecks: async (root, args, { Deck }) => {
      console.log("getAllDecks");
      return await Deck.find();
    },
    getAllCards: async (root, args, { Card }) => {
      console.log("getAllCards");
      return await Card.find();
    },
    getDeck: async (root, { _id }, { Deck }) => {
      console.log("getDeck");
      return await Deck.findById({ _id });
    }
  },
  Mutation: {
    addDeck: async (root, { name }, { Deck }) => {
      console.log("addDeck");
      const newDeck = await new Deck({
        name
      }).save();
      return newDeck;
    },
    addCard: async (root, { deckId, question, answer }, { Card }) => {
      console.log("addCard");
      const newCard = await new Card({
        deckId,
        question,
        answer
      }).save();
      return newCard;
    }
  }
};
