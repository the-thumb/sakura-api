var Sequelize = require("sequelize");


var db = require('./index');

var    sequelize = db.sequelize;
       Sequelize = db.Sequelize;

    console.log

module.exports = function(sequelize, DataTypes){
    const UserProfiles = sequelize.define('UserProfiles',{
        userName: {
        type: sequelize.STRING,
            allowNull: false
        },

        firstName: {
            type: sequelize.STRING,
            allowNull: false,
            // validate: {
            //     len:
            // }

        },
        lastName: {
            type: sequelize.STRING,
            allowNull: true,
            default: 'Gardener'

        },
        email: {
            type: sequelize.STRING,
            allowNull: true,
            default: 'none'
        },
        location: {
            type: sequelize.STRING,
            allowNull: false

        },
        gender:{
            type: sequelize.STRING,
            allowNull: true
        },
        geocode: {
            type: sequelize.STRING

        },
        password: {
            type: sequelize.STRING,
            allowNull: false

        },
        image: {
            type: sequelize.STRING,
            allowNull: true
            

        },
        avatar:{
            type: sequelize.STRING,
            allowNull: true,
            defaultValue: 'flower'


        },
        intro: {
            type: sequelize.TEXT,
            allowNull: true,
            defaultValue: 'an empty plot...'

        },
        hasGarden: {
            type: sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false

        },
        availableTime: {
            type: sequelize.INTEGER,
            allowNull: false,
            defaultValue: 5

        },
        organic: {
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        flowers:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        tomatoes:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        cucumbers:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        sweetPeppers: {
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        beans:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        peas: {
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        carrots: {
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        squash:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        lettuce:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        watermelon:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        onion:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        sweetCorn:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        cabbage:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        potatoes:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        radishes:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        mint:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        basil:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        cilantro:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        beets:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        zucchini:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        broccoli:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        other:{
            type: sequelize.BOOLEAN,
            defaultValue: true

        },
        theme:{
            //this detects whether we are going on the forest or the flower theme. The default is false as the assumption is that the flower is our default and changing that is 'picking a new theme'
            type: sequelize.BOOLEAN,
            defaultValue: false
        }

    },{
        freezeTableName: true
    });
    UserProfiles.sync().then(()=>{
        UserProfiles.create({
            userName: 'bobpaulson',
            firstName:'robert',
            lastName: 'paulson',
            gender: 'male',
            email: 'rpaulson@gmail.com',
            location: 'durham',
            geocode: '23-58-23-192',
            password: 'we need to hash this',
            image: 'yay images',
            avatar: 'potato',
            intro: 'I like to eat potatoes',
            hasGarden: true,
            availableTime: 5,
            organic: false,
            flowers: false,
            tomatoes: false,
            cucumbers: false,
            sweetPeppers: false,
            beans: false,
            peas: false,
            carrots: false,
            squash: false,
            lettuce: false,
            watermelon: false,
            onion: false,
            sweetCorn: false,
            cabbage: false,
            potatoes: true,
            radishes: false,
            mint: false,
            basil: false,
            cilantro: false,
            beets: false,
            zucchini: false,
            broccoli: false,
            other: false,
            theme: true
        })
        UserProfiles.create({
            userName: 'whalegurl',
            firstName:'marge',
            lastName: 'beluga',
            gender: 'female',
            email: 'beluga@gmail.com',
            location: 'raleigh',
            geocode: '23-57-23-192',
            password: 'we need to hash this too',
            image: 'yay images',
            avatar: 'not a potato',
            intro: 'I dont  like to eat potatoes',
            hasGarden: true,
            availableTime: 5,
            organic: true,
            flowers: true,
            tomatoes: true,
            cucumbers: true,
            sweetPeppers: true,
            beans: true,
            peas: true,
            carrots: true,
            squash: true,
            lettuce: true,
            watermelon: true,
            onion: true,
            sweetCorn: true,
            cabbage: true,
            potatoes: false,
            radishes: true,
            mint: true,
            basil: true,
            cilantro: true,
            beets: true,
            zucchini: true,
            broccoli: true,
            other: true,
            theme: false
        })
        UserProfiles.create({
            userName: 'strangerdanger',
            firstName:'random',
            lastName: 'stranger',
            gender: 'non-binary',
            email: 'ihadbugsforlunch@gmail.com',
            location: 'chapel hill',
            geocode: '23-57-23-192',
            password: 'we need to hash this too too',
            image: 'yay images',
            avatar: 'not a potato',
            intro: 'I dont  like to eat potatoes',
            hasGarden: true,
            availableTime: 5,
            organic: false,
            flowers: true,
            tomatoes: true,
            cucumbers: true,
            sweetPeppers: true,
            beans: true,
            peas: true,
            carrots: true,
            squash: true,
            lettuce: true,
            watermelon: true,
            onion: true,
            sweetCorn: true,
            cabbage: true,
            potatoes: false,
            radishes: true,
            mint: false,
            basil: true,
            cilantro: true,
            beets: true,
            zucchini: true,
            broccoli: true,
            other: true,
            theme: true
        })
    });
    
    
}
