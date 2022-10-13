import Package from "../models/Package.js";

export const createPackage = async (req, res) => {
  const { description, weight, dimensions } = req.body;

  try {
    const newPackage = new Package({
        description,
        weight,
        dimensions,
    });

    const packageSaved = await newPackage.save();

    res.status(201).json(packageSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getPackageById = async (req, res) => {
  const { packageId } = req.params;

  const packagee = await Package.findById(packageId);
  res.status(200).json(packagee);
};

export const getPackages = async (req, res) => {
  const packages = await Package.find();
  return res.json(packages);
};

export const updatePackageById = async (req, res) => {
  const updatedPackage = await Package.findByIdAndUpdate(
    req.params.packageId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedPackage);
};

export const deletePackageById = async (req, res) => {
  const { packageId } = req.params;

  await Package.findByIdAndDelete(packageId);

  // code 200 is ok too
  res.status(204).json();
};