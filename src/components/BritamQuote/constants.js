const prodTypes = ['Individual', 'Family', 'Group']

const groupProducts = ['LAST EXPENCE', 'PERSONAL ACCIDENT', 'MEDICAL COVER', 'OTHERS']

const individualProductsTypes = ['For my self', 'For my business']
const individualSelfProducts = ['MEDICAL COVER', 'Motor Vehical Cover']
const individualBusinessProducts = ['FIRE AND BURGLAR', 'Work Injury Benefits Act (WIBA)', 'Loss of income', 'Other']

const familyProducts = ['LAST EXPENCE', 'PERSONAL ACCIDENT', 'MEDICAL COVER', 'OTHERS']


export const pp = {
    productTypes: [{
        individual: [{
            self: [...individualSelfProducts]
        }, {
            business: [...individualBusinessProducts]
        }]
    },
    {
        family: [...familyProducts]
    },
    {
        group: [...groupProducts]
    }
    ]
}