import { Meteor } from "meteor/meteor";

const PromisifiedMeteor = {
    call: (name, ...args) => {
        return new Promise((resolve, reject) => {
            Meteor.call(name, ...args, (err, res) => {
                    if (err) {
                        reject(err)
                        return
                    }

                    resolve(res)
                }
            )
        })
    }
}

export default PromisifiedMeteor