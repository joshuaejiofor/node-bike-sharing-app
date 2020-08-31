import jwt from 'jsonwebtoken'

export const auth = (req: any, res: any, next: any) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '')

        if(decoded !== process.env.JWT_STATIC_VALUE){
            throw new Error()
        }

        req.token = token
        next()
    } catch (e) {
        res.status(401).send({ 
            error: 'Please authenticate.',  
            "Bearer token (Set authorization)": jwt.sign(process.env.JWT_STATIC_VALUE || '', process.env.JWT_SECRET || '')
        })
    }
}