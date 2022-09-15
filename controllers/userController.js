import fireStore from "../db.js";
import Users from "../models/user.js";
import Minitherapies from "../models/minitherapies.js";
// const fireStore = db.firestore();


export const getAlluser = async(req, res, next) => {
    try {
        console.log("Getting all user");
        const user = await fireStore.collection("users");
        const data = await user.get();
        const arr = [];
        let miniFunc;
        if (data.empty) {
            res.status(200).json({ message: "No records found" });
        } else {
            let total = 0;
            data.forEach((item) => {
                const minitherapiesarr = [];
                miniFunc = async() => {
                    const minitherapies = await fireStore.collection("users").doc(item.id).collection("minitherapies");
                    const minitherapiesData = await minitherapies.get();

                    if (!minitherapiesData.empty) {
                        minitherapiesData.forEach((therapy) => {
                            const minitherapy = new Minitherapies(
                                therapy.id,
                                therapy.data().completedOn,
                                therapy.data().startedOn,
                                therapy.data().status.isCompleted
                            );
                            minitherapiesarr.push(minitherapy);
                        });
                    }
                }

                const users = new Users(
                    item.id,
                    item.data().age,
                    item.data().alias,
                    item.data().country,
                    item.data().emailAddress,
                    item.data().firstConversation,
                    item.data().gender,
                    item.data().name,
                    item.data().pronouns,
                    minitherapiesarr
                );
                arr.push(users);
                total = total + 1;
            });
            await miniFunc();
            res.status(200).json({
                listing: arr,
                count: total
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};