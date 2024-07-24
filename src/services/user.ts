import { db } from './firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { User } from '../components/user/User';

export async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users: User[] = querySnapshot.docs.map(doc => doc.data() as User);
  return users;
}

export async function updateUser(userId: string, status: string, fallen_time: string) {
  try {
    const userDoc = doc(db, "users", userId);
    await updateDoc(userDoc, {
      status,
      fallen_time
    });
  } catch {
    console.error("Erro ao atualizar usuário.");
  }
}