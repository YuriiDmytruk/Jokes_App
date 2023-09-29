const path = require('path');

module.exports = {
  testPathForConsistencyCheck: path.join(
    __dirname,
    'src/tests/example.test.ts'
  ),
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const snapshotsFolder = path.join(__dirname, 'src/tests/snapshots');

    const relativeTestPath = path.relative(
      path.join(__dirname, 'src/tests'),
      testPath
    );
    const snapshotFileName = relativeTestPath.replace(
      /\.[jt]s(x)?$/,
      snapshotExtension
    );
    return path.join(snapshotsFolder, snapshotFileName);
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    const snapshotFileName = path.basename(snapshotFilePath, snapshotExtension);

    const relativeTestPath = snapshotFileName + '.ts';

    return path.join(__dirname, 'src/tests', relativeTestPath);
  },
};
