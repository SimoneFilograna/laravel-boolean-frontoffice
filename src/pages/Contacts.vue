<script>
export default {

}
</script>

<template>
    <div class="container">
        <h1 class="text-center mt-5">Contattaci</h1>

        <form action="">
            <div class="mb-3">
                <label for="name" class="form-label">Inserisci il tuo nome</label>
                <input type="text" class="form-control" id="name" placeholder="">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Inserisci l'Email</label>
                <input type="email" class="form-control" id="email" placeholder="">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Inserisci un messagio</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
            </div>

            <button class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.container {

    form {
        padding: 3rem 5rem;
    }
}
</style>