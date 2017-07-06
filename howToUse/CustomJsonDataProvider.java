package noraui.data.json;

import noraui.data.CommonDataProvider;
import noraui.data.DataInputProvider;
import noraui.data.DataOutputProvider;
import noraui.exception.TechnicalException;

public class CustomJsonDataProvider extends CommonDataProvider implements DataInputProvider, DataOutputProvider {

    public CustomJsonDataProvider() {
        super();
        logger.info("data provider used is ...");
    }

    @Override
    public void prepare(String scenario) throws TechnicalException {
        // TODO Auto-generated method stub

    }

    @Override
    public void writeFailedResult(int line, String value) throws TechnicalException {
        // TODO Auto-generated method stub

    }

    @Override
    public void writeWarningResult(int line, String value) throws TechnicalException {
        // TODO Auto-generated method stub

    }

    @Override
    public void writeSuccessResult(int line) throws TechnicalException {
        // TODO Auto-generated method stub

    }

    @Override
    public void writeDataResult(String column, int line, String value) throws TechnicalException {
        // TODO Auto-generated method stub

    }

    @Override
    public int getNbLines() throws TechnicalException {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public String readValue(String column, int line) throws TechnicalException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String[] readLine(int line, boolean readResult) throws TechnicalException {
        // TODO Auto-generated method stub
        return null;
    }

}
