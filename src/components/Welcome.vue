<template>
    <div id="welcome">
        <h1 v-html="title"></h1>
        <h2>{{ title }}</h2>
        <input type="text" v-model="title" name="title"><br>
        <span class="message">{{ message }}</span>
        <div v-if="show" class="user-block">{{ user.firstName }} {{ user.lastName }}</div>
        <div v-else="show">Nobody!</div>
        <div class="list">
            <ul>
                <li v-for="item in items">{{ item.element }}</li>
            </ul>
        </div>
        <button v-on:click="greet('Hi Man!')">Say Greeting</button><br>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitEnter">
        <hr>
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" v-model="user.firstName">
        <br>
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="text" v-model="user.lastName">
        <h3>{{ fullName }}</h3>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>

export default {
    name: 'welcome',
    props: {
        msg: {
            type: String,
            default: 'FooBar'
        }
    },
    data () {
        return {
            title: 'Hello from Vue!',
            message: 'Good evening!',
            user: {
                firstName: "John",
                lastName: "Doe"
            },
            show: true,
            items: [
                { element: 'Item #1' },
                { element: 'Item #2' },
                { element: 'Item #3' },
            ]
        }
    },
    methods: {
        greet: function(greeting) {
            alert(greeting);
        },
        pressKey: function(e) {
            console.log(e.target.value)
        },
        hitEnter: function() {
            console.log('Hit Enter!');
        }
    },
    computed: {
        fullName: function() {
            return this.user.firstName + ' ' + this.user.lastName;
        }
    }
}
</script>

<style scope>
    .message {
        color: #23cdea;
    }
    .list {
        text-align: left;
    }
</style>