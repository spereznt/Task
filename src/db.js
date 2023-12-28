import {Pool} from 'pg'

new Pool({
    port : 5432,
    host :'localhost',
    user : 'postgres',
    password : 'password'
})