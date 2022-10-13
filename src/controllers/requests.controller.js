import Requests from "../models/Requests";

export const createRequest = async (req, res) => {
  const { user_id, date_request, city_source, city_destiny } = req.body;

  try {
    const newRequest = new Requests({
        user_id,
        date_request,
        city_source,
        city_destiny,
    });

    const requestSaved = await newRequest.save();

    res.status(201).json(requestSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getRequestById = async (req, res) => {
  const { requestId } = req.params;

  const request = await Requests.findById(requestId);
  res.status(200).json(request);
};

export const getRequests = async (req, res) => {
  const requests = await Requests.find();
  return res.json(requests);
};

export const updateRequestById = async (req, res) => {
  const updatedRequest = await Requests.findByIdAndUpdate(
    req.params.requestId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedRequest);
};

export const deleteRequestById = async (req, res) => {
  const { requestId } = req.params;

  await Requests.findByIdAndDelete(requestId);

  // code 200 is ok too
  res.status(204).json();
};