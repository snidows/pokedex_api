import { Response} from "express"

export class ControllerBase {

  public internal_server_error(response:Response,value:any): Response {
    return response.status(500).json(value)
  }
  public ok(response:Response,value:any): Response {
    return response.status(200).json(value)
  }
  public created(res: Response, value: any): Response {
    return res.status(201).json(value)
  }
  public no_content(res: Response): Response {
    return res.status(403).end()
  }
  public unauthorized(res: Response, value: any): Response {
    return res.status(401).json(value)
  }
  public forbidden(res: Response, value: any): Response {
    return res.status(403).json(value)
  }
  public unsuported_media_type(res: Response): Response {
    return res.status(415).end()
  }
  public not_found(res: Response): Response {
    return res.status(404).end()
  }
  public conflit(res: Response,value:any): Response {
    return res.status(409).json(value)
  }
}
