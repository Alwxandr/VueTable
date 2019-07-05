<template>
    <div class="mt-2">
        <div><input v-model.trim ="searchInput" @keyup="searchName()" type="text" name="search" placeholder=" Поиск по названию"></div>
        <table class="table" >
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" rel="0" @click="sortField('name')">{{name}} <span class="sort"></span> </th>
                <th scope="col" rel="0" @click="sortField('price')">{{price}} <span class="sort"></span></th>
                <th scope="col" rel="0" @click="sortField('count')">{{count}} <span class="sort"></span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(v,index) in showArr"  :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{v.name}}</td>
                <td>{{v.price}}</td>
                <td>{{v.count}}</td>
                <td><button class="btn btn-outline-success" @click="delField(index)">Удалить</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {eventEmitter} from './main'
    export default {
        data(){
            return {
                list : [
                    {  name : "Стиральный порошок",price:50, count : 20 },
                    {  name : "Комет",price: 30, count : 3 },
                    {  name : "Ленор",price: 150, count : 10 }
                    ],
                name: 'Название',
                price: 'Цена',
                count: 'Количество',
                sort: '',
                searchInput: '',
                showArr: []
            }
        },
        methods: {
            delField (id){ this.list.splice(id, 1) },

            sortField (field){
                let el = event.target
                let sort = el.lastChild

                if (el.getAttribute('rel') === '0'){
                    el.setAttribute('rel', '-1')
                    sort.innerHTML =  " &darr;";
                } else if (el.getAttribute('rel') === '-1'){
                    el.setAttribute('rel', '1')
                    sort.innerHTML =  " &uarr;";
                } else if (el.getAttribute('rel') === '1'){
                    el.setAttribute('rel', '0')
                    sort.innerHTML =  " ";
                }
                let forSort = {
                    field: field,
                    arr: this.list,
                    order: el.getAttribute('rel')
                }
                eventEmitter.$emit('forSort', forSort)
            },
            searchName(){
                eventEmitter.$emit('forSearch', {'list':this.list, 'searchInput' : this.searchInput} )
            }
        },
        created() {
            this.showArr = this.list
            eventEmitter.$on('addField', (field) => {
                this.list.push(field)
            });
            eventEmitter.$on('searchArr', (searchList) => {
                this.showArr = searchList
            })
        }
    }
</script>

<style scoped>
    tr th {
        cursor: pointer;
    }
    .sort{
        display: inline-block;
        width: 15px;
    }
</style>