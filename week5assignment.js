class Patient {
        constructor (name, dateOfBirth) {
            this.name = name;
            this.dateOfBirth = dateOfBirth;
        }
// The patient class holds two pieces of information; the name and date of birth. 
    describe () {
    return `${this.name} 'Date of birth' ${this.dateOfBirth}.`;
    }
}
    
class Room {
    constructor (roomNumber) {
        this.roomNumber = roomNumber;
        this.patients = [];
// the Room class identifies the room number. This menu app functions to assign patients to rooms, and to create rooms in the system when they become available. 
    }

    addPatient (patient) {
        if (patient instanceof Patient) {
            this.patients.push(patient);
        } else {
            throw new Error('You can only add an instance of Patient. Argument is not a patient: ${patient}');
        }
    }
    describe() {
        return `${this.Room} has {this.patients.length} patients.`}
    }


class Menu {
    constructor () {
        this.rooms= [];
        this.selected = null;
    }
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createRoom();
                    break;
                case '2':
                   this.viewRoom ();
                   break;
                case '3': 
                        this.deleteRoom();
                    break;
                case '4':
                    this.displayRoom();
                    break;
                default:
                    selection = 0
        
            }
        selection = this.showMainMenuOptions();
        }
        alert('Logging Off');
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new room
        2) view room
        3) delete room
        4) display all rooms
        `);
    }
    showPatientMenuOptions(roomInfo) {
        return prompt (`
        0) back
        1) create patient
        2) delete patient
        ------------------------------
        ${roomInfo}
        `);
    }
    displayRoom() {
        let roomString = '';
        for (let i = 0; i < this.rooms.length; i++) {
            roomString += i + ')' + this.rooms [i].roomNumber + '\n';
        }
        alert(roomString);
    }
    createRoom() {
        let roomNumber = prompt ('Enter new room number:');
        this.rooms.push(new Room(roomNumber));
    }
    viewRoom() {
        let index= prompt('enter the index of the room you wish to view:');
        if(index> -1 && index <this.rooms.length) {
            this.selectedRoom= this.rooms[index];
            let description = 'Room: ' + this.selectedRoom.roomNumber + '\n';

            for (let i =0; i < this.selectedRoom.patients.length; i++ ){
                description += i + ') ' + this.selectedRoom.patients[i].name + '-' + this.selectedRoom.patients[i].dateOfBirth + '\n';

            }
        let selection = this.showPatientMenuOptions(description);
        switch (selection) {
            case '1' :
                this.createPatient ();
                break;
            case '2':
                this.deletePatient();
            }
        }
       }
       deleteRoom(){
           let index = prompt('Enter room you want to delete:')
           if (index > -1 && index < this.rooms.length) {
               this.rooms.splice(index, 1);
           }

       }
       createPatient(){
           let name = prompt('Enter new patient name:');
           let dateOfBirth = prompt('enter date of birth for new patient:');
           this.selectedRoom.patients.push(new Patient(name, dateOfBirth));
       }
       deletePatient() {
           let index = prompt('Enter the index of the patient to delete:');
           if (index > -1 && index < this.selectedRoom.patients.length) {
               this.selectedRoom.patient.splice (index,1);
           }
       }
       }
       
       let menu = new Menu();
       menu.start();
