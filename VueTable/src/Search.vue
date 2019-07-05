<template>

</template>

<script>
    import {eventEmitter} from './main'

    export default {
        data(){
            return {

                searchArr: []
            }
        },
        methods: {
            searchName(list, input){

                this.searchArr =  list.filter(function(list) {
                    return list.name.toLowerCase().indexOf(input.toLowerCase()) !== -1;
                });
                eventEmitter.$emit('searchArr', this.searchArr)
            }
        },
        created(){
            eventEmitter.$on('forSearch', (forSearch) =>{
                this.searchName(forSearch.list, forSearch.searchInput)
            })
        }
    }
</script>

<style scoped>

</style>