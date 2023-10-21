<script>
export default {

}
</script>

<template>
    <div class="container">
        <h1 class="text-center fw-bold my-4">Contattaci</h1>
>>>>>>> 25c0110a55978eaaa10e95b8592b2741cab6ab9c

        <div class="row">
            <div class="col-5">
                <form action="">
                    <div class="mb-3">
                        <label for="name" class="form-label fw-bold">Inserisci il tuo nome</label>
                        <input type="text" class="form-control" id="name" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label fw-bold">Inserisci l'Email</label>
                        <input type="email" class="form-control" id="email" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label fw-bold">Inserisci un messagio</label>
                        <textarea class="form-control" id="message" rows="3"></textarea>
                    </div>

                    <div class="d-flex justify-content-center">
                        <a href="#0" class="btn btn-primary px-4 fw-bold">Invia</a>
                    </div>
                </form>
            </div>
            <div class="col-7 container-img">
                <img src="../assets/images/drink2.jpg" alt="">
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container {
    h1 {
        color: #80725F;
    }
    .container-img {
        img {
            width: 100%;
        }
    }

    form {
        padding: 3rem;

        a {
            background-color: #80725F;
            border: 0;

            &:active {
                background-color: #4d453b;
            }

            &:hover {
                background-color: #6e5f4c;

            }
        }
    }
}
</style>