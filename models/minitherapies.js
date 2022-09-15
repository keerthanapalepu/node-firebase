class Minitherapies {
    constructor(id, completedOn, startedOn, isCompleted) {
        this.id = id; // represents the id generated by the firestore
        this.completedOn = completedOn;
        this.startedOn = startedOn;
        this.status = {
            "isCompleted": isCompleted
        }

    }
}

export default Minitherapies;