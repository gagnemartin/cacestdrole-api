import { Response } from "express"

/**
 * Return status errors
 *
 * @param thrown
 * @param res
 */
export const SendErrorStatus = (thrown: any, res: Response) =>
{
    if (thrown.message === 'Not found') {
        res.sendStatus(404)
    } else {
        console.error(thrown)
        res.sendStatus(500)
    }
}