import { data } from "@/data"
export default function handler(req, res) {
    let id = req.query.id;
    let project = data.find(el => el.id == id)
    if (project) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ err: "NOT FOUND" })
    }
}
