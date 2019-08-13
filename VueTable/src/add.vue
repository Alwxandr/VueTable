<template>
    <div>
        <div class="text-right"><button title="Добавить новую позицию" @click="ChangeVisible "class="btn btn-primary ">{{but}}</button></div>
        <form ref="form" v-bind:class="{ dnone: isActive }" @submit.prevent="onSubmit">
            <div class="ib">
                <label for="name">Наименование</label><br>
                <input id="name" type="text" v-model="name">
            </div>

            <div class="ib">
                <label for="price">Цена</label><br>
                <input id="price" type="number" v-model="price">
            </div>

            <div class="ib">
                <label for="count">Количество</label><br>
                <input id="count" type="number" v-model="count">
            </div>
            <button class="btn btn-success" :disabled="$v.$invalid">Добавить</button>
        </form>
    </div>
</template>

<script>
    import {eventEmitter} from './main'
    import { required} from 'vuelidate/lib/validators'
    export default {
        data(){
            return {
                but: "+",
                isActive: true,
                name: '',
                price: '',
                count: ''
            }
        },
        methods: {
            ChangeVisible() {

                if (this.but === "+"){
                    this.but = "-"
                    this.isActive = false
                }else{
                    this.but = "+"
                    this.isActive = true
                }
            },
            onSubmit(){
                const newField = {
                    name : this.name,
                    price: this.price,
                    count: this.count
                }
                eventEmitter.$emit('addField', newField )
                this.name = '',
                this.price= '',
                this.count= ''
            }
        },
        validations: {
            name: {
                required,
            },
            price: {
                required
            },
            count : {
                required
            }
        }
    }
</script>

<style scoped>
.ib{
    display: inline-block;
}
.dnone{
    display: none;
}
</style>