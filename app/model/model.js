const petTypes = ['SNAKE', 'LPG', 'TREE_FROGS'];
const genders = ['UNKNOWN','MALE', 'FEMALE'];
const statuses = ['Healthy','RIP','Sick','Watchout'];

const fildinput = [
    {
        id:'number',
        label:'Number',
        type:'number'
    },{
        id:'name',
        label:'Name',
        type:'text'
    },{
        id:'petType',
        label:'PetType',
        type:'select',
        option:petTypes
    },{
        id:'gender',
        label:'Gender',
        type:'select',
        option:genders
    },{
        id:'dateOfBirth',
        label:'Date Of Birth',
        type:'datetime'
    },{
        id:'age',
        label:'Age',
        type:'text'
    },{
        id:'status',
        label:'Status',
        type:'select',
        option:statuses
    },{
        id:'note',
        label:'Note',
        type:'text'
    },{
        id:'habits',
        label:'Habits',
        type:'text'
    },{
        id:'favoriteFood',
        label:'Favorite Food',
        type:'text'
    },
]

let parmas = {
    listsPet:[]
}

export {fildinput,parmas}