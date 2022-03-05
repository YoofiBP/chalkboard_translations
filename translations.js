const app = require('./firebaseConfig');

const db = app.firestore()

const getTranslation = async (translation) => {
    const collection = db.collection('translations')
    const document = await collection.doc(translation).get();
    const data = document.data();
    return {
        [translation]: data
    }
}

module.exports = {getTranslation}