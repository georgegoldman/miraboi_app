<template>
    <div class="position-relative h-100">
        <div class="position-absolute top-50 start-50 translate-middle">
            <h1>
                <img :src="ondevImage" alt="" srcset="">
                <p>This Page is under Revamping</p>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnDev',
    data () {
        return {
            ondevImage: '../img/brick-wall.png'
        }
    }
}
</script>

<style >
#onde{
      text-align: center;
}
</style>