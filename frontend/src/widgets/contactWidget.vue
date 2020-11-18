<template>
     <v-row justify='space-around' class="mt-8" >
          <v-flex  xs12 sm8 md6   data-aos="slide-up"
        data-aos-duration="1000" >     
            <v-form class="ma-2"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="16"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
    ></v-text-field>
    <v-textarea
      rows="4"
      v-model="message"
      clearable
      clear-icon="close"
      label="Your Message"
    ></v-textarea>
        <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
        </v-form>
          </v-flex>
   
 <v-flex  xs12 sm8 md5 data-aos="slide-up"
        data-aos-duration="2000"  >
         <v-row align="center" class="mt-8">
           <v-icon
             class="ml-8"
              x-large
             color="blue darken-3"
            > mail</v-icon>
            <v-timeline
            dense
          >
            <v-timeline-item
              small
            >
              <div>
                 <a href="mailto:shife.abel@gmail.com" target="_blank" class="subtitle-1 text-decoration-none">shife.abel@gmail.com</a>
                 <br>
                  <a href="mailto:abelshifeg@gmail.com" target="_blank" class="subtitle-1 text-decoration-none">abelshifeg@gmail.com</a>
             </div>
            </v-timeline-item>
          </v-timeline>
         </v-row>
            <v-row align="center">
           <v-icon
             class="ml-8"
              x-large
             color="blue darken-3"
            > phone</v-icon>
            <v-timeline
            dense
          >
            <v-timeline-item
              small
            >
              <div>
                 <a href="tel:+251947012893" target="_blank" class="subtitle-1 text-decoration-none">+251947012893</a>
                 <br>
                  <a href="tel:+251940881300" target="_blank" class="subtitle-1 text-decoration-none">+251940881300</a>
             </div>
            </v-timeline-item>
          </v-timeline>
         </v-row>
            <v-row align="center">
           <v-icon
             class="ml-8"
              x-large
             color="blue darken-3"
            > groups</v-icon>
            <v-timeline
            dense
          >
            <v-timeline-item
              small
            >
              <v-row>
                 <a href="http://t.me/tatuye_abel" target="_blank" class="mr-4">
                 <v-img src="@/assets/images/telegram.png" alt="t" height="30px" width="30px" />
                 </a>
                   
                   <a href="http://linkedin.com/in/abel-shiferaw-547596177" target="_blank" class="mr-4">
                 <v-img src="@/assets/images/linkedin.png" alt="t" height="30px" width="30px" />
                 </a>
             </v-row>
            </v-timeline-item>
          </v-timeline>
         </v-row>
 </v-flex>
     </v-row>
</template>

<script>
export default {
    data(){
        return {
           valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 16) || 'Name must be less than 16 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message:'',
      
        }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      }
    }
}
</script>