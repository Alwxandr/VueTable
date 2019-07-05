<template>
    <div>

    </div>
</template>
<script>
    import {eventEmitter} from './main'
    export default {
        data(){
            return{
                searchField: '',
                list: []
            }
        },
        created(){
            eventEmitter.$on('forSort', (forSort)=> {

                let arrs = forSort.arr;
                let sortFunct = (field, order) => {
                    if(order === '-1'){
                        arrs.sort(function (a,b) {
                            return b[field]-a[field]
                        })
                    } else if (order === '1'){
                        arrs.sort(function (a,b) {

                            return a[field]-b[field]
                        })
                    }
                }
                if(forSort.field === 'name'){
                    if(forSort.order === "-1"){
                        arrs.sort(function (a,b) {
                            let nameA = a.name.toLowerCase();
                            let nameB = b.name.toLowerCase();
                            if (nameA < nameB)
                                return -1
                            if (nameA > nameB)
                                return 1
                            return 0
                        })
                    }
                    if(forSort.order === "1"){
                        arrs.sort(function (a,b) {
                            let nameA = a.name.toLowerCase();
                            let nameB = b.name.toLowerCase();
                            if (nameA < nameB)
                                return 1
                            if (nameA > nameB)
                                return -1
                            return 0
                        })
                    }
                }else if (forSort.field === 'price' || forSort.field === 'count' ) {
                    sortFunct(forSort.field, forSort.order)
                }
            })
        }
    }
</script>

<style scoped>

</style>