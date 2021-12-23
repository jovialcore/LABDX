import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/dashboard/Index'
import alert from '@/components/Report/alert/Index'
import amctracking from '@/components/Report/amctracking/Index'
import appointmentsvisit from '@/components/Report/appointmentsvisit/Index'
import appointments from '@/components/Report/appointments/Index'
import automatedmeasure from '@/components/Report/automatedmeasure/Index'
import blankpage from '@/components/pages/blankpage/Index'
import calendar from '@/components/Application/calendar'
import changepassword from '@/components/settings/changepassword'
import chat from '@/components/Messages/chat/Index'
import clientlist from '@/components/Report/clientlist/Index'
import clientrx from '@/components/Report/clientrx/Index'
import clinicalreport from '@/components/Report/clinicalreport/Index'
import components from '@/components/pages/components/Index'
import createvisit from '@/components/patients/createvisit/Index'
import datatables from '@/components/tables/datatables/Index'
import deleteaccount from '@/components/settings/deleteaccount'
import druginventory from '@/components/Report/druginventory/Index'
import electronicsreport from '@/components/procedures/electronicsreport/Index'
import error404 from '@/components/pages/error404/Index'
import error500 from '@/components/pages/error500/Index'
import expensecategory from '@/components/Report/expensecategory/Index'
import flowboardrecord from '@/components/Report/flowboardrecord/Index'
import flowboard from '@/components/Report/flowboard/Index'
import forgotpassword from '@/components/pages/forgotpassword/Index'
import formbasicinputs from '@/components/pages/formbasicinputs/Index'
import formhorizontal from '@/components/pages/formhorizontal/Index'
import forminputgroups from '@/components/pages/forminputgroups/Index'
import formmask from '@/components/pages/formmask/Index'
import formvalidation from '@/components/pages/formvalidation/Index'
import formvertical from '@/components/pages/formvertical/Index'
import immunizationregistry from '@/components/Report/immunizationregistry/Index'
import inbox from '@/components/Application/inbox'
import invoice from '@/components/patients/invoice/index'
import labdocument from '@/components/procedures/labdocument/Index'
import lockscreen from '@/components/pages/lockscreen/Index'
import login from '@/components/pages/login/Index'
import mapsvector from '@/components/pages/mapsvector/index'
import notifications from '@/components/settings/notifications'
import patientlist from '@/components/Report/patientlist/Index'
import patientsdata from '@/components/patients/patientsdata/Index'
import patientsdocument from '@/components/patients/patientsdocument/index'
import patientshistory from '@/components/patients/patientshistory/Index'
import patientissues from '@/components/patients/patientissues/index'
import patientsprofile from '@/components/patients/patientsprofile/index'
import patientsreport from '@/components/patients/patientsreport/index'
import patientsresults from '@/components/patients/patientsresults/index'
import patientstransactions from '@/components/patients/patientstransactions/index'
import patients from '@/components/Application/patients'
import pendingorders from '@/components/Report/pendingorders/index'
import pendingreview from '@/components/patients/pendingreview/index'
import preferences from '@/components/settings/preferences'
import profile from '@/components/pages/profile/index'
import qualitymeasures from '@/components/Report/qualitymeasures/index'
import recallboard from '@/components/Application/recallboard'
import referalsreport from '@/components/Report/referalsreport/index'
import register from '@/components/pages/register/index'
import reportresults from '@/components/Report/reportresults/index'
import settings from '@/components/Application/settings'
import standardmeasures from '@/components/Report/standardmeasures/index'
import tablesbasic from '@/components/tables/tablesbasic'
import taxtypes from '@/components/settings/taxtypes'
import uniqueinsurance from '@/components/Report/uniqueinsurance/index'
import users from '@/components/Application/users'
import visithistory from '@/components/patients/visithistory/index'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: 'app', // you use the base tag to set the root path of your application  or process.env.BASE_URL
    routes: [{
            path: '/index',
            name: 'index',
            component: Index,
            meta: {
                auth: true
            },
        },
        {
            path: '/',
            name: 'home',
            // meta: {
            //   auth: true
            // },

            component: Index
        },
        {
            path: '/alert-log',
            name: 'alert-log',
            meta: {
                auth: true
            },
            component: alert
        },
        {
            path: '/amc-tracking',
            name: 'amc-tracking',
            meta: {
                auth: true
            },
            component: amctracking
        },
        {
            path: '/appointments-visit',
            name: 'appointments-visit',
            meta: {
                auth: true
            },
            component: appointmentsvisit
        },
        {
            path: '/appointments',
            name: 'appointments',
            meta: {
                auth: true
            },
            component: appointments
        },
        {
            path: '/automated-measures',
            name: 'automated-measures',
            meta: {
                auth: true
            },
            component: automatedmeasure
        },
        {
            path: '/blank-page',
            name: 'blank-page',
            meta: {
                auth: true
            },
            component: blankpage
        },
        {
            path: '/calendar',
            name: 'calendar',
            meta: {
                auth: true
            },
            component: calendar
        },
        {
            path: '/change-password',
            name: 'change-password',
            meta: {
                auth: true
            },
            component: changepassword
        },
        {
            path: '/chat',
            name: 'chat',
            meta: {
                auth: true
            },
            component: chat
        },
        {
            path: '/client-list',
            name: 'client-list',
            component: clientlist
        },
        {
            path: '/client-rx',
            name: 'client-rx',
            meta: {
                auth: true
            },
            component: clientrx
        },
        {
            path: '/clinical-report',
            name: 'clinical-report',
            meta: {
                auth: true
            },
            component: clinicalreport
        },
        {
            path: '/components',
            name: 'components',
            meta: {
                auth: true
            },
            component: components
        },
        {
            path: '/create-visit',
            name: 'create-visit',
            meta: {
                auth: true
            },
            component: createvisit
        },
        {
            path: '/data-tables',
            name: 'data-tables',
            meta: {
                auth: true
            },
            component: datatables
        },
        {
            path: '/delete-account',
            name: 'delete-account',
            meta: {
                auth: true
            },
            component: deleteaccount
        },
        {
            path: '/drug-inventory',
            name: 'drug-inventory',
            meta: {
                auth: true
            },
            component: druginventory
        },
        {
            path: '/electronics-report',
            name: 'electronics-report',
            meta: {
                auth: true
            },
            component: electronicsreport
        },
        {
            path: '/error-404',
            name: 'error-404',
            meta: {
                auth: true
            },
            component: error404
        },
        {
            path: '/error-500',
            name: 'error-500',
            component: error500
        },
        {
            path: '/expense-category',
            name: 'expense-category',
            component: expensecategory
        },
        {
            path: '/flow-board-record',
            name: 'flow-board-record',
            component: flowboardrecord
        },
        {
            path: '/flow-board',
            name: 'flow-board',
            component: flowboard
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: forgotpassword
        },
        {
            path: '/form-basic-inputs',
            name: 'form-basic-inputs',
            component: formbasicinputs
        },
        {
            path: '/form-horizontal',
            name: 'form-horizontal',
            component: formhorizontal
        },
        {
            path: '/form-input-groups',
            name: 'form-input-groups',
            component: forminputgroups
        },
        {
            path: '/form-mask',
            name: 'form-mask',
            component: formmask
        },
        {
            path: '/form-validation',
            name: 'form-validation',
            component: formvalidation
        },
        {
            path: '/form-vertical',
            name: 'form-vertical',
            component: formvertical
        },
        {
            path: '/immunization-registry',
            name: 'immunization-registry',
            component: immunizationregistry
        },
        {
            path: '/inbox',
            name: 'inbox',
            component: inbox
        },
        {
            path: '/invoice',
            name: 'invoice',
            component: invoice
        },
        {
            path: '/lab-documents',
            name: 'lab-documents',
            component: labdocument
        },
        {
            path: '/lock-screen',
            name: 'lock-screen',
            component: lockscreen
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/maps-vector',
            name: 'maps-vector',
            meta: {
                auth: true
            },
            component: mapsvector
        },
        {
            path: '/notifications',
            name: 'notifications',
            meta: {
                auth: true
            },
            component: notifications
        },
        {
            path: '/patient-list',
            name: 'patient-list',
            meta: {
                auth: true
            },
            component: patientlist
        },
        {
            path: '/patients-data',
            name: 'patients-data',
            meta: {
                auth: true
            },
            component: patientsdata
        },
        {
            path: '/patients-documents',
            name: 'patients-documents',
            meta: {
                auth: true
            },
            component: patientsdocument
        },
        {
            path: '/patients-history',
            name: 'patients-history',
            meta: {
                auth: true
            },
            component: patientshistory
        },
        {
            path: '/patients-issues',
            name: 'patients-issues',
            meta: {
                auth: true
            },
            component: patientissues
        },
        {
            path: '/patients-profile',
            name: 'patients-profile',
            meta: {
                auth: true
            },
            component: patientsprofile
        },
        {
            path: '/patients-report',
            name: 'patients-report',
            meta: {
                auth: true
            },
            component: patientsreport
        },
        {
            path: '/patients-results',
            name: 'patients-results',
            meta: {
                auth: true
            },
            component: patientsresults
        },
        {
            path: '/patients-transactions',
            name: 'patients-transactions',
            meta: {
                auth: true
            },
            component: patientstransactions
        },
        {
            path: '/patients',
            name: 'patients',
            meta: {
                auth: true
            },
            component: patients
        },
        {
            path: '/pending-orders',
            name: 'pending-orders',
            meta: {
                auth: true
            },
            component: pendingorders
        },
        {
            path: '/pending-review',
            name: 'pending-review',
            meta: {
                auth: true
            },
            component: pendingreview
        },
        {
            path: '/preferences',
            name: 'preferences',
            meta: {
                auth: true
            },
            component: preferences
        },
        {
            path: '/profile',
            name: 'profile',
            meta: {
                auth: true
            },
            component: profile
        },
        {
            path: '/quality-measures',
            name: 'quality-measures',
            meta: {
                auth: true
            },
            component: qualitymeasures
        },
        {
            path: '/recall-board',
            name: 'recall-board',
            meta: {
                auth: true
            },
            component: recallboard
        },
        {
            path: '/referals-report',
            name: 'referals-report',
            meta: {
                auth: true
            },
            component: referalsreport
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/report-results',
            name: 'report-results',
            meta: {
                auth: true
            },
            component: reportresults
        },
        {
            path: '/settings',
            name: 'settings',
            meta: {
                auth: true
            },
            component: settings
        },
        {
            path: '/standard-measures',
            name: 'standard-measures',
            meta: {
                auth: true
            },
            component: standardmeasures
        },
        {
            path: '/tables-basic',
            name: 'tables-basic',
            meta: {
                auth: true
            },
            component: tablesbasic
        },
        {
            path: '/tax-types',
            name: 'tax-types',
            meta: {
                auth: true
            },
            component: taxtypes
        },
        {
            path: '/unique-insurance',
            name: 'unique-insurance',
            meta: {
                auth: true
            },
            component: uniqueinsurance
        },
        {
            path: '/users',
            name: 'users',
            meta: {
                auth: true
            },
            component: users
        },
        {
            path: '/visit-history',
            name: 'visit-history',
            meta: {
                auth: true
            },
            component: visithistory
        }
    ],
    linkActiveClass: "active",
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    next();
})

export default router