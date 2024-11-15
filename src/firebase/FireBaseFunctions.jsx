
import { app } from "./FireBaseConfiq";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {
    collection, addDoc, getDocs, deleteDoc, doc, getDoc, getFirestore, setDoc, updateDoc
} from "firebase/firestore";

const auth = getAuth(app);
export const db = getFirestore(app);




export const signUpUser = async (obj) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, obj.email, obj.password);
        return userCredential.user;
    } catch (error) {
        console.error("Error signing up:", error);
        return null;
    }
};

export const loginUser = async (obj) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, obj.email, obj.password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error);
        return null;
    }
};



export const dataGet = async (nodeName, id) => {
    const docRef = doc(db, nodeName, id);
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document");
            return null;
        }
    } catch (error) {
        console.error(`Error getting document data: ${error}`);
        throw error;
    }
};


export const dataSet = async (nodeName, obj, id) => {
    if (!id) {
        console.error("ID is missing!");
        return null;
    }
    const docRef = doc(db, nodeName, id);
    try {
        await setDoc(docRef, obj);
        console.log("Data successfully sent");
        return true;
    } catch (error) {
        console.error(`Error in sending data: ${error}`);
        return null;
    }
};


export const dataEdit = async (nodeName, id, obj) => {
    const docRef = doc(db, nodeName, id);
    try {
        await updateDoc(docRef, obj);
        console.log("Data successfully updated");
        return true;
    } catch (error) {
        console.error(`Error updating document: ${error}`);
        throw error;
    }
};


export const dataDelete = async (nodeName, id) => {
    const docRef = doc(db, nodeName, id);
    try {
        await deleteDoc(docRef);
        console.log("Data successfully deleted");
        return true;
    } catch (error) {
        console.error(`Error deleting data: ${error}`);
        throw error;
    }
};



;


export const addUsersToFirestore = async (users) => {
    const usersCollectionRef = collection(db, "users");
    try {
        for (const user of users) {
            await addDoc(usersCollectionRef, user);
        }
        console.log("Users successfully added to Firestore");
    } catch (error) {
        console.error("Error adding users to Firestore:", error);
    }
};


export const fetchUsersFromFirestore = async () => {
    const usersCollectionRef = collection(db, "users");
    try {
        const querySnapshot = await getDocs(usersCollectionRef);
        const users = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return users;
    } catch (error) {
        console.error("Error fetching users from Firestore:", error);
        return [];
    }
};






export const fetchPostsFromFirestore = async () => {
    const postsCollection = collection(db, "posts");
    const snapshot = await getDocs(postsCollection);
    const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return posts;
};

export const addPostsToFirestore = async (obj) => {
    try {
        const userCollectionRef = collection(db, "posts");
        await addDoc(userCollectionRef, obj);
        console.log("Dummy post added successfully.");
    } catch (error) {
        console.error("Error adding dummy post:", error);
    }
};





export const addCommentsToFireStore = async (comments) => {

    ;
    try {
        const docRef = collection(db, 'comments');
        await addDoc(docRef, comments)

    } catch (error) {
        console.log(error);

    }
}


export const fetchCommentsFromFireStore = async () => {
    try {
        const docRef = collection(db, "comments");
        const snapshot = await getDocs(docRef);
        const comments = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return comments;
    } catch (error) {
        console.log("Error Fetching Comments", error);
        return [];
    }
};


export const addAlbumsToFireStore = async (obj) => {

    try {
        const docRef = collection(db, "albums")
        await addDoc(docRef, obj)
    } catch (error) {
        console.log("Error Writing Data", error);
    }

}

export const fetchAlbumsFromFireStore = async () => {
    try {
        const docRef = collection(db, 'albums');
        const snapshot = await getDocs(docRef);
        const albums = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return albums;
    } catch (error) {
        console.error("Error fetching albums: ", error);
        return [];
    }
}


export const addPhotosToFireStore = async (photo) => {
    try {
        const docRef = collection(db, 'photos')
        await addDoc(docRef, photo)
        alert("Photo added")
    } catch (error) {

    }
}

export const fetchPhotosFromFireStore=async()=>{
    try {
        const docRef=collection(db,'photos');
        const snapshot=await getDocs(docRef)
        const photos =snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        return photos
    } catch (error) {
        console.error("Error fetching albums: ", error);
        return [];
    }
}