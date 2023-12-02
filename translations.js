const app = require('./firebaseConfig');

const db = app.firestore()
const getTranslation = async () => {
    const collection = db.collection('translations')
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({
        [doc.id]: doc.data()
    }));
}


module.exports = {getTranslation}