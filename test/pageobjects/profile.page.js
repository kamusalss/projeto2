import { $ } from '@wdio/globals'

class ProfilePage {
    async profileName (name){
        return await $(`//android.widget.TextView[Qtext="${name}"]`)
    }
}

export default new ProfilePage();